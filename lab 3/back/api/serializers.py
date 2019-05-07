from rest_framework import serializers
from api.models import Task, TaskList

class TaskListSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    def create(self, validated_data):
        task_list = TaskList(**validated_data)
        task_list.save()
        return task_list

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    status = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)
    task_list_id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        task = Task(**validated_data)
        task.save()
        return task

class TaskSerializerDetail(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)
    due_on = serializers.DateTimeField(required=False)
    status = serializers.CharField()
    task_list_id = serializers.IntegerField(write_only=True, required=False)

    def create(self, validated_data):
        task = Task(**validated_data)
        task.save()
        return task

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.status = validated_data.get('status', instance.status)
        instance.due_on = validated_data.get('due_on', instance.due_on)
        instance.save()
        return instance
