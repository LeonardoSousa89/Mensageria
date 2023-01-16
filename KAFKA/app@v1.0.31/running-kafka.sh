# copie e cole no terminal
git clone https://github.com/LeonardoSousa89/Mensageria.git  &&
cd Mensageria &&
cd KAFKA &&
cd 'app@v1.0.22' &&
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
cd 'app@v1.0.22' &&
chmod a+x topic-dados.sh &&
./topic-dados.sh 


sudo docker run -d -p 8767:8767 --name consumer leozin89/consumer:v1 &&
sudo docker run -d -p 8766:8766 --name producer leozin89/producer:v1 