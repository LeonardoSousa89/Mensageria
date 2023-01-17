# copie e cole no terminal
git clone https://github.com/LeonardoSousa89/Mensageria.git  &&
cd Mensageria &&
cd KAFKA &&
cd 'app@v1.0.31' &&
cd consumer &&
sudo docker build -t leozin89/consumer:v1 . &&
sudo docker login -u leozin89 &&
sudo docker push leozin89/consumer:v1 &&
cd .. &&
cd producer &&
sudo docker build -t leozin89/producer:v1 . &&
sudo docker login -u leozin89 &&
sudo docker push leozin89/producer:v1 &&
cd .. &&
sudo docker-compose up 


# copie e cole no terminal de execução do arquivo de criação do tópico de teste
cd Mensageria &&
cd KAFKA &&
cd 'app@v1.0.31' &&
chmod a+x topic-dados.sh &&
./topic-dados.sh 
 
sudo docker network create -d bridge mensageria --subnet=172.28.0.0/16 

sudo docker network connect --ip 172.28.0.3 mensageria kafka

sudo docker network connect --ip 172.28.0.4 mensageria zookeeper

sudo docker run --name producer -p 8766:8766 --ip 172.28.0.5 --network mensageria  leozin89/producer:v1 

sudo docker run --name consumer -p 8767:8767 --ip 172.28.0.6 --network mensageria leozin89/consumer:v1 

# inspecionando a rede
sudo docker network ls
sudo docker network inspect mensageria

# voltar pastas
cd ../../../
cd ../../../../

# derrubar container kafka, zookeeper, producer e consumer
sudo docker rm -f kafka
sudo docker rm -f zookeeper
sudo docker rm -f producer
sudo docker rm -f consumer

# excluir imagens
sudo docker image ls 

sudo docker image rm -f [id*]

# excluir pasta

rm -rf Mensageria