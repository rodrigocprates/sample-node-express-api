# sample-node-express-api

Sample node app exposing a express endpoint through express.

## To test on aws 

### AWS (tests to run in an EC2 instance)

create ec2 instance
    set inbound http 3000 (security group)
install node
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    . ~/.nvm/nvm.sh
    nvm install node
    [TODO] create AMI after
install git
    sudo yum update -y &&  sudo yum install git -y

clone repo
    node index.js

access GET <public dns>:3000/

## ECS

### Docker img

docker build -t sample-node-express-api .
docker run -p 3000:3000 --name sample-node-express-api -d sample-node-express-api


## TODO tests

ECS
Beanstalk
ELB
Static ips