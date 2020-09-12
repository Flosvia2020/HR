# Generated by Django 3.1.1 on 2020-09-11 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=16)),
                ('is_active', models.BooleanField(default=True)),
                ('is_valid', models.BooleanField(default=False)),
            ],
        ),
    ]
