	sudo docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
	--create \
	--replication-factor 1 \
	--partitions 1 \
	--topic test