## Customized open source dashboard

1. npm install
2. npm run serve
3. localhost:8080<br />


## Service Concept
***This project was not aimed at commercialization, but rather at studying IoT services.*** <br />
***Set the odor level based on the temperature inside the food waste bin and the amount of food waste. The higher the internal temperature and the higher the amount of waste, the worse the odor becomes.*** <br />

***The user initially sets the temperature, the amount of waste, and the automatic deodorization cycle.<br />
If the current internal temperature of the waste bin or the current amount of food waste exceeds the user's initial set values, the alarm arrives and the user can reset the automatic deodorization cycle.***<br />

## Login Page 
![image](https://user-images.githubusercontent.com/90228547/166733026-eea894b4-2d26-4233-a850-8dbe45bbe1a0.png)
***The user can use the service after inputting the specific code assigned to the waste bin.***<br />


## About Our Service  

![image](https://user-images.githubusercontent.com/90228547/166734436-02975d7f-2d64-4303-a401-18b5f81eeff3.png)
***It is an additional explanation for our service.<br /> I knew that there were Arduino sensors that could quantify smells, but I used weight sensors and temperature sensors to use as many sensors as possible in terms of study and to handle data.***<br />

## Precautions for setting values

![image](https://user-images.githubusercontent.com/90228547/166736892-ee44d9fb-7993-4faa-8942-3638742f0b83.png)
***It is an additional description of the set value.***<br />

## Dashboard(Arduino sensors)
![image](https://user-images.githubusercontent.com/90228547/166742135-3ae8aaca-27e0-4caa-b2e4-8cab4711fd1f.png)
***Dashboard showing the weight of food waste, the internal temperature of the bin, and the current deodorization cycle***<br />

## Settings
![image](https://user-images.githubusercontent.com/90228547/166742252-f844fac3-d229-4c85-90ef-99ff75995df0.png)
***You can modify the setting values on this page at any time.***<br />

## Alarm modal
![image](https://user-images.githubusercontent.com/90228547/166742419-55741110-a1d6-4bc4-b50f-b0c57d7a4bd9.png)
***If the current amount of food waste exceeds the set amount, or the current temperature inside the waste bin exceeds the set temperature, the user is asked whether to reset the cycle.***<br />
