---
image: /img/integration-services/logo/integration_services.png
description: This section describes all the configuration parameters which you can customize in your Integration Service Kubernetes instance.
keywords:
- integration services kubernetes
- services kubernetes instance
- Kubernetes
- configuration
- MongoDB
- APIs
---
# Configuration

This section describes all the configuration parameters which you can customize in your Integration Service Kubernetes
instance. Please keep in mind that all values must be changed before deployment. If your Kubernetes instance is already
running, you should run the following command to load your most recent configuration:

```bash
kubectl apply -f kubernetes/optional -f kubernetes/
```

## Database

You can connect the Integration Service APIs to any MongoDB database by changing the following parameters
in  [kubernetes/is-config.yaml file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-config.yaml) :

- `DATABASE_URL` with the connection string
- `DATABASE_NAME` with the database name

The default values reference a single-instance MongoDB instance that is deployed
using `kubernetes/optional/mongo-*.yaml` files in the `default` namespace.

## Secrets

The Integration Services APIs are protected by a fixed api key. Furthermore, the data on database is encrypted using a
server key.

Both of these keys are defined in
the [is-secrets.yaml file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-secrets.yaml)
and are base64 encoded, so you can obtain them with by running the follwing command:

```bash
echo -n ...SERVER_SECRET_KEY or API_KEY... | base64
```

The default values are:

- `PpKFhPKJY2efTsN9VkB7WNtYUhX9Utaa` as `SERVER_SECRET`.
- `94F5BA49-12B6-4E45-A487-BF91C442276D` as `API_KEY`.

## Number of Replicas

You can set up the initial number of replicas in the `.spec.replicas` field
in [kubernetes/is-deployment.yaml  file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-deployment.yaml)
.

## Ingress Hostname

If you are accessing service via an Ingress resource, you can set the domain name
in [kubernetes/optional/ingress.yaml file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/optional/ingress.yaml)
. The default value is `ensuresec.solutions.iota.org`.

## Private Tangle

You can reference your own private IOTA node (either from the mainnet tangle or a private one) by the `IOTA_PERMA_NODE`
and `IOTA_HORNET_NODE` fields in
the [kubernetes/is-config.yaml file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-config.yaml)
.
