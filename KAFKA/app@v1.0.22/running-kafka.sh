# copie e cole no terminal
git clone https://github.com/LeonardoSousa89/Mensageria.git  &&
cd Mensageria &&
cd KAFKA &&
cd 'app@v1.0.22' &&
sudo docker-compose up


# copie e cole no terminal de execução do arquivo de criação do tópico de teste
cd Mensageria &&
cd KAFKA &&
cd 'app@v1.0.22' &&
chmod a+x topic-dados.sh &&
./topic-dados.sh

# voltar pastas
cd ../../../
cd ../../../../

# derrubar container kafka
sudo docker rm -f kafka

# excluir imagens
sudo docker image ls 

sudo docker image rm -f [id*]

# excluir pasta

rm -rf Mensageria