	sudo docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
	--create \
	--replication-factor \
	--partition 1 \
	--topic test