/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_author_free(a: number): void;
export function author_new(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function author_from_client(a: number, b: number, c: number, d: number): number;
export function author_import(a: number, b: number, c: number, d: number, e: number): number;
export function author_export(a: number, b: number, c: number, d: number): void;
export function author_clone(a: number): number;
export function author_channel_address(a: number, b: number): void;
export function author_is_multi_branching(a: number): number;
export function author_get_public_key(a: number, b: number): void;
export function author_send_announce(a: number): number;
export function author_send_keyload_for_everyone(a: number, b: number): number;
export function author_send_keyload(a: number, b: number, c: number, d: number): number;
export function author_send_tagged_packet(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function author_send_signed_packet(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function author_receive_subscribe(a: number, b: number): number;
export function author_receive_tagged_packet(a: number, b: number): number;
export function author_receive_signed_packet(a: number, b: number): number;
export function author_receive_sequence(a: number, b: number): number;
export function author_receive_msg(a: number, b: number): number;
export function author_sync_state(a: number): number;
export function author_fetch_next_msgs(a: number): number;
export function author_gen_next_msg_ids(a: number): number;
export function __wbg_subscriber_free(a: number): void;
export function subscriber_new(a: number, b: number, c: number, d: number, e: number): number;
export function subscriber_from_client(a: number, b: number, c: number): number;
export function subscriber_import(a: number, b: number, c: number, d: number, e: number): number;
export function subscriber_clone(a: number): number;
export function subscriber_channel_address(a: number, b: number): void;
export function subscriber_is_multi_branching(a: number): number;
export function subscriber_get_public_key(a: number, b: number): void;
export function subscriber_is_registered(a: number): number;
export function subscriber_unregister(a: number): void;
export function subscriber_export(a: number, b: number, c: number, d: number): void;
export function subscriber_receive_announcement(a: number, b: number): number;
export function subscriber_receive_keyload(a: number, b: number): number;
export function subscriber_receive_tagged_packet(a: number, b: number): number;
export function subscriber_receive_signed_packet(a: number, b: number): number;
export function subscriber_receive_sequence(a: number, b: number): number;
export function subscriber_receive_msg(a: number, b: number): number;
export function subscriber_send_subscribe(a: number, b: number): number;
export function subscriber_send_tagged_packet(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function subscriber_send_signed_packet(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function subscriber_sync_state(a: number): number;
export function subscriber_fetch_next_msgs(a: number): number;
export function __wbg_sendoptions_free(a: number): void;
export function __wbg_get_sendoptions_depth(a: number): number;
export function __wbg_set_sendoptions_depth(a: number, b: number): void;
export function __wbg_get_sendoptions_local_pow(a: number): number;
export function __wbg_set_sendoptions_local_pow(a: number, b: number): void;
export function __wbg_get_sendoptions_threads(a: number): number;
export function __wbg_set_sendoptions_threads(a: number, b: number): void;
export function sendoptions_new(a: number, b: number, c: number): number;
export function sendoptions_clone(a: number): number;
export function __wbg_address_free(a: number): void;
export function address_new(): number;
export function address_addr_id(a: number, b: number): void;
export function address_set_addr_id(a: number, b: number, c: number): void;
export function address_msg_id(a: number, b: number): void;
export function address_set_msg_id(a: number, b: number, c: number): void;
export function address_from_string(a: number, b: number): number;
export function address_to_string(a: number, b: number): void;
export function address_copy(a: number): number;
export function address_eq(a: number, b: number): number;
export function __wbg_userresponse_free(a: number): void;
export function __wbg_nextmsgid_free(a: number): void;
export function __wbg_message_free(a: number): void;
export function __wbg_pskids_free(a: number): void;
export function __wbg_publickeys_free(a: number): void;
export function pskids_new(): number;
export function pskids_add(a: number, b: number, c: number): void;
export function pskids_get_ids(a: number): number;
export function publickeys_new(): number;
export function publickeys_add(a: number, b: number, c: number): void;
export function publickeys_get_pks(a: number): number;
export function message_default(): number;
export function message_new(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function message_get_pk(a: number, b: number): void;
export function message_get_public_payload(a: number): number;
export function message_get_masked_payload(a: number): number;
export function nextmsgid_new(a: number, b: number, c: number): number;
export function nextmsgid_get_pk(a: number, b: number): void;
export function nextmsgid_get_link(a: number): number;
export function userresponse_new(a: number, b: number, c: number): number;
export function userresponse_from_strings(a: number, b: number, c: number, d: number, e: number): number;
export function userresponse_copy(a: number): number;
export function userresponse_get_link(a: number): number;
export function userresponse_get_seq_link(a: number): number;
export function userresponse_get_message(a: number): number;
export function __wbg_client_free(a: number): void;
export function client_new(a: number, b: number, c: number): number;
export function set_panic_hook(): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hec655510c02eb47a(a: number, b: number, c: number): void;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function wasm_bindgen__convert__closures__invoke2_mut__h73e854de51f3b0ff(a: number, b: number, c: number, d: number): void;
