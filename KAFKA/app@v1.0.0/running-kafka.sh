# copie e cole no terminal
git clone https://github.com/LeonardoSousa89/Mensageria.git  &&
cd Mensageria &&
cd KAFKA &&
cd 'app@v1.0.18' &&
sudo docker-compose up


# copie e cole no terminal de execução do arquivo de criação do tópico de teste
cd Mensageria &&
cd KAFKA &&
cd 'app@v1.0.18' &&
chmod a+x topic-test.sh &&
./topic-test.sh