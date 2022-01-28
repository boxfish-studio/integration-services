import { ClientConfig } from '../models/clientConfig';
const crypto = require('crypto');
const bs58 = require('./../bs58/bs58');
import * as ed from '@noble/ed25519';
import { ApiVersion } from '../models/apiVersion';
import axios, { AxiosInstance } from 'axios';

/**
 * This is the base client used as a parent class for all clients
 * using the integration services api.
 */
export abstract class BaseClient {
  private apiKey: string;
  private baseUrl: string;
  private apiVersion: ApiVersion;
  private jwtToken?: string;
  private instance: AxiosInstance;

  // Default config is a local api without an api key
  constructor({ apiKey, baseUrl, apiVersion }: ClientConfig = {}) {
    this.apiKey = apiKey || '';
    this.baseUrl = baseUrl || 'http://127.0.0.1:3000';
    this.apiVersion = apiVersion || ApiVersion.v01;
    // Configure request timeout to 2 min because tangle might be slow
    this.instance = axios.create({
      timeout: 120000
    });
  }

  /**
   * Authenticates the user to the api for requests where authentication is needed
   * @param id of the user to authenticate
   * @param secretKey of the user to authenticate
   */
  async authenticate(id: string, secretKey: string) {
    const body = await this.get(`authentication/prove-ownership/${id}`);
    const nonce = body?.nonce;
    const encodedKey = await this.getHexEncodedKey(secretKey);
    const signedNonce = await this.signNonce(encodedKey, nonce);
    const { jwt } = await this.post(`authentication/prove-ownership/${id}`, {
      signedNonce
    });
    this.jwtToken = jwt;
  }

  private async signNonce(privateKey: string, nonce: string): Promise<string> {
    if (nonce?.length !== 40) {
      throw new Error('nonce must have a length of 40 characters!');
    }
    const hash = await this.hashNonce(nonce);
    const signedHash = await ed.sign(hash, privateKey);
    return ed.Signature.fromHex(signedHash).toHex();
  }

  private async hashNonce(nonce: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(nonce);
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  private getHexEncodedKey(base58Key: string) {
    return bs58.decode(base58Key).toString('hex');
  }

  protected async post(url: string, data: any) {
    let response = await this.instance.request({
      method: 'post',
      url: `${this.baseUrl}/api/${this.apiVersion}/${url}`,
      params: {
        'api-key': this.apiKey
      },
      data,
      headers: this.jwtToken ? { Authorization: `Bearer ${this.jwtToken}` } : {}
    });
    return response?.data;
  }

  protected async get(url: string, params: any = {}) {
    params['api-key'] = this.apiKey;
    let response = await this.instance.request({
      method: 'get',
      url: `${this.baseUrl}/api/${this.apiVersion}/${url}`,
      params,
      headers: this.jwtToken ? { Authorization: `Bearer ${this.jwtToken}` } : {}
    });
    return response?.data;
  }

  protected async delete(url: string, params: any = {}) {
    params['api-key'] = this.apiKey;
    let response = await this.instance.request({
      method: 'delete',
      url: `${this.baseUrl}/api/${this.apiVersion}/${url}`,
      params,
      headers: this.jwtToken ? { Authorization: `Bearer ${this.jwtToken}` } : {}
    });
    return response?.data;
  }

  protected async put(url: string, data: any) {
    let response = await this.instance.request({
      method: 'put',
      url: `${this.baseUrl}/api/${this.apiVersion}/${url}`,
      params: {
        'api-key': this.apiKey
      },
      data,
      headers: this.jwtToken ? { Authorization: `Bearer ${this.jwtToken}` } : {}
    });
    return response?.data;
  }
}
