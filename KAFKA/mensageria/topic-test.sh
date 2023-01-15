	sudo docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
	--create \
	--zookeeper zookeeper:2181 \
	--replication-factor \
	--partition 1 \
	--topic-test