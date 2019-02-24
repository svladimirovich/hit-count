# hit-count
experimenting on continuous integration with GKE


## Short instructions on setting up continuous integration

### You need to set up GIT webhook to point to your build machine. Your build machine should have the following environment set up:

* Git source control installed
* Google Cloud SDK installed
  * Gcloud authorized with service user key
  * Gcloud project set
  * Gcloud compute/zone set
  * Gcloud cluster selected
* Docker installed
  * Docker user logged in

You can view the example of commands that set up such environment in the [.travis.yml](https://github.com/svladimirovich/hit-count/blob/master/.travis.yml) configuration file.

### To deploy solution from build machine to Kubernetes you need to:
  1. Pull code from GIT
  2. Build docker images
  3. Push docker images to docker Hub
  4. Apply kubernetes configuration files

Three of the steps above are executed in the [deploy-to-k8s.sh](https://github.com/svladimirovich/hit-count/blob/master/deploy-to-k8s.sh) file.
