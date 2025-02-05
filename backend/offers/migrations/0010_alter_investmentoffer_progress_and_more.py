# Generated by Django 5.0.6 on 2024-07-11 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0009_alter_investmentoffer_progress_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='investmentoffer',
            name='progress',
            field=models.DecimalField(decimal_places=1, max_digits=4),
        ),
        migrations.AlterField(
            model_name='investmentoffer',
            name='status',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='projectoffer',
            name='progress',
            field=models.DecimalField(decimal_places=1, max_digits=4),
        ),
        migrations.AlterField(
            model_name='projectoffer',
            name='status',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='surfaceoffer',
            name='progress',
            field=models.DecimalField(decimal_places=1, max_digits=4),
        ),
        migrations.AlterField(
            model_name='surfaceoffer',
            name='status',
            field=models.CharField(max_length=100),
        ),
    ]
