
# Legend - Getting Started

## Run Legend locally

This step assumes that Docker has already been installed.

Copy/paste the command below in a terminal. 

```
bash <(curl -s https://raw.githubusercontent.com/mrudula-gs/legend/fsDemo/fsdemo/Demo.sh)
```

Wait for a few minutes till the following banner is printed

```
All components have started successfully!
Supervisor: http://localhost:6901 (user: iam, password: legend)
Legend Engine: http://localhost:6300
Legend SDLC: http://localhost:6100
Legend Studio: http://localhost:9000/studio

To start using Legend, launch Studio at: http://localhost:9000/studio/
```

## Visit Legend in a browser 

Open http://localhost:9000/studio/

## Use Legend 

Follow the tutorials at https://legend.finos.org/docs/tutorials/studio-workspace

## Saving your model 

This version of Legend saves the models to the container file system.

They will be saved to disk and read back when the Legend Docker image is restarted, and can be viewed at http://localhost:6902/tmp/Legend 

To save, switch to text mode (Hit F8 or the hacker icon in the bottom right corner of Studio) and copy/paste the model to a notepad/file etc.
