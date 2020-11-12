

var game = new Phaser.Game(1200, 900, Phaser.AUTO, 'TutContainer', { preload: preload, create: create, update:update });
var upKey;
var downKey;
var leftKey;
var rightKey;
//array del mapa
var levelData=
[['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
  ['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',1,1,0,0,0,1,5,'x',1,2,9,9,3,'x',1,1,1,'x',3,1,1,2,9,9,1,1,7,'x',1,1,7,'x',1,2,9,9,1,1,1,7,'x',1,1,3,'x',2,9,9,1,3,'x',1,7,'x',3,'x',1,2,9,9,1,1,3,'x',1,1,1,1,1,1,'x'],
['x',14,14,14,14,14,14,14,14,4,'x',9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',11,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x',1,7,'x',1,14,1,1,7,'x',2,9,9,1,5,'x',3,'x',1,7,'x','x','x',9,9,1,1,3,'x',1,1,5,'x',1,1,9,9,1,3,'x',7,'x',1,1,7,'x',1,9,9,1,1,2,'x',1,5,'x',1,5,'x',9,9,1,1,1,7,'x',1,5,'x',1,1,'x'],
['x',0,0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',0,0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',5,'x',1,1,3,'x',1,2,1,2,9,9,1,1,1,5,'x',1,7,'x',1,2,9,9,1,1,5,'x',1,3,'x',1,1,1,9,9,7,'x',5,'x',3,'x',1,7,'x',2,9,9,1,1,1,7,'x',1,1,3,'x',2,9,9,5,'x',3,'x',5,'x',1,7,'x',1,'x'],
['x',14,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',1,'x'],
['x','x','x','x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x',1,9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x',1,5,'x',3,'x',1,7,'x',1,2,9,9,5,'x',1,3,'x',1,1,5,'x',2,9,9,1,1,3,'x',1,7,'x',5,'x',2,9,9,1,5,'x',3,'x',1,1,7,'x',2,9,9,1,1,1,7,'x',1,3,'x',1,1,9,9,1,5,'x',1,7,'x',1,3,'x',1,'x'],
['x',0,0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',0,0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',1,5,'x',7,'x',1,7,'x',4,'x',9,9,1,1,1,5,'x',1,1,7,'x',2,9,9,1,1,1,5,'x',1,7,'x',1,2,9,9,5,'x',1,7,'x',1,5,'x',1,2,9,9,1,1,7,'x',1,5,'x',1,1,2,9,9,7,'x',1,5,'x',1,1,1,7,'x','x'],
['x',14,14,14,14,14,14,14,14,'x','x',9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',1,'x'],
['x','x','x','x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',16,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,12,'x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x',5,'x',1,1,3,'x',1,5,'x',2,9,9,1,1,5,'x',1,1,1,7,'x',2,9,9,1,3,'x',5,'x',10,'x','x',3,'x',9,9,5,'x','x','x','x',3,'x',7,'x',2,9,9,1,7,'x',1,1,1,1,3,'x',2,9,9,5,'x',1,7,'x',1,1,7,'x',1,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',1,1,5,'x',7,'x',1,1,1,2,9,9,1,1,7,'x',1,3,'x',5,'x',2,9,9,7,'x',1,1,1,3,'x',5,'x',2,9,9,1,7,'x',1,1,1,7,'x',1,1,5,'x',7,'x',1,1,1,1,1,5,'x',2,9,9,1,5,'x',7,'x',1,7,'x',1,1,'x'],
['x',14,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',1,14,14,14,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',1,'x'],
['x','x','x','x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',8,'x',9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x',1,1,5,'x',3,'x',7,'x','x','x',9,9,5,'x',3,'x',7,'x',1,1,1,2,9,9,5,'x',7,'x',1,1,1,1,'x','x',9,9,1,5,'x',1,3,'x',1,1,7,'x',1,1,5,'x',1,1,7,'x',1,1,1,2,9,9,5,'x',1,3,'x',1,1,1,7,'x','x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',1,1,5,'x',3,'x',1,1,1,2,9,9,1,5,'x',1,1,7,'x',1,1,2,9,9,5,'x',1,1,7,'x',1,5,'x',2,9,9,1,1,1,1,3,'x',1,5,'x',2,9,9,1,7,'x',1,3,'x',5,'x',1,2,9,9,7,'x',3,'x',1,5,'x',1,7,'x','x'],
['x',14,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',1,'x'],
['x','x','x','x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x ',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x',5,'x',1,3,'x',1,1,5,'x',2,9,9,1,3,'x',1,1,7,'x',5,'x',2,9,9,1,1,3,'x',1,1,1,7,'x',2,9,9,5,'x',1,1,3,'x',1,1,1,2,9,9,1,5,'x',1,1,7,'x',1,1,2,9,9,1,5,'x',1,7,'x',1,3,'x',1,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',5,'x',3,'x',1,7,'x',1,1,2,9,9,1,1,5,'x',1,1,1,7,'x',2,9,9,5,'x',1,3,'x',1,1,7,'x',2,9,9,1,1,7,'x',5,'x',7,'x',1,2,9,9,1,7,'x',1,3,'x',1,1,1,2,9,9,5,'x',1,3,'x',1,7,'x',1,1,'x'],
['x',14,14,14,14,14,14,14,14,4,'x',9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,4,'x',9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,14,'s','x','x','x','x','x',2,9,9,1,14,'x',13,'x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x',1,1,3,'x',5,'x',7,'x',1,2,9,9,1,1,3,'x',1,7,'x',1,1,2,9,9,1,1,5,'x',7,'x',1,1,1,2,9,9,1,1,7,'x',1,3,'x',5,'x',2,9,9,1,3,'x','x','x','x',1,5,'x',2,9,9,1,1,7,'x',1,1,1,5,'x',1,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',1,5,'x',1,1,7,'x',5,'x',2,9,9,1,1,5,'x',7,'x',1,1,1,2,9,9,1,5,'x',1,1,7,'x',1,1,2,9,9,5,'x',7,'x',1,1,1,5,'x',2,9,9,'a','a','p','p','p','p','p','p','p','p',9,9,1,1,1,7,'x',1,5,'x',1,1,'x'],
['x',14,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,1,14,14,14,14,14,14,14,'x',2,9,9,'p','a','p','p','p','p','p','p','p','p',9,9,1,14,14,14,14,14,14,14,'x',1,'x'],
['x','x','x','x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,'p','p','a','a','p','p','a','p','a','p',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,'p','p','a','p','a','p','a','p','p','p',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,'p','a','p','p','p','p','p','p','p','a',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,'p','a','a','p','p','p','a','p','p','p',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,'p','p','a','p','p','a','p','p','a','p',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x',4,'x',9,9,1,14,'x','x','x','x','x','x',8,'x',9,9,1,14,'x','x','x','x','x','x',6,'x',9,9,'p','a','p','p','p','p','p','a','p','a',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x','x','x','x','x','x','x','x','x','x',2,9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,1,14,'x','x','x','x','x','x','x','x',9,9,'p','a','p','a','p','p','a','p','a','a',9,9,1,14,'x','x','x','x','x','x','x',1,'x'],
['x',1,1,1,1,1,1,5,'x',1,2,9,9,1,1,1,5,'x',1,1,1,1,2,9,9,1,1,1,5,'x',1,1,1,1,2,9,9,1,1,1,1,1,1,1,1,1,2,9,9,'p','p','p','p','p','p','p','p','p','p',9,9,1,1,1,1,5,'x',1,1,1,1,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'x'],
['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x']];

//x & y valores del vector de dirección para el movimiento del personaje
var dX=0;
var dY=0;
var tileWidth=100;// ancho del azulejos
var borderOffset = new Phaser.Point(550,300);//para centralizar la visualización del nivel isométrico
var wallGraphicHeight=214;
var floorGraphicWidth=225;
var floorGraphicHeight=109;
var heroGraphicWidth=55;
var heroGraphicHeight=92;
var wallHeight=wallGraphicHeight-floorGraphicHeight; 
var heroHeight=(floorGraphicHeight/2)+(heroGraphicHeight-floorGraphicHeight)+6;//ajustes para que las piernas al pasar el medio de la loseta para la carga inicial
var heroWidth= (floorGraphicWidth/2)-(heroGraphicWidth/2);//por colocar héroe en el medio de la loseta
var facing='south';//direccion del personaje
var sorcerer;//personaje
var sorcererShadow;//duh
var shadowOffset=new Phaser.Point(heroWidth+7,11);
var bmpText;//titulo
var normText;//posicion del texto
var gameScene;//esta es la textura de render en la que dibujamos la escena ordenada en profundidad
var floorHSprite;
var floorVSprite;
var pastoSprite;
var arbolSprite;
var tienda1Sprite;
var tienda1VSprite;
var casa1Sprite;
var casa1VSprite;
var casa2Sprite;
var casa2VSprite;
var casa3Sprite;
var casa3VSprite;
var sede1Sprite;
var sede2Sprite;
var sede3Sprite;
var sede4Sprite;
var sede5Sprite;
var transSprite;
var heroMapTile=new Phaser.Point(2,2);//ubicacion del personaje
var heroMapPos;//2D coordenadas del sprite del marcador del mapa del héroe en el minimapa, suponga que este es el punto medio del gráficoc
var heroSpeed=10.2;//velocidad del personaje 
var hero2DVolume = new Phaser.Point(30,30);//ahora que no tenemos un minimapa y un sprite de mapa de héroe, necesitamos esto
var cornerMapPos=new Phaser.Point(0,0);
var cornerMapTile=new Phaser.Point(0,0);
var halfSpeed=0.7;
var visibleTiles=new Phaser.Point(85,85);


function preload() {
		game.load.crossOrigin='Anonymous';
    //cargar todo lo necesario
    game.load.bitmapFont('font', 'https://dl.dropboxusercontent.com/s/z4riz6hymsiimam/font.png?dl=0', 'https://dl.dropboxusercontent.com/s/7caqsovjw5xelp0/font.xml?dl=0');
    game.load.image('greenTile', 'https://dl.dropboxusercontent.com/s/nxs4ptbuhrgzptx/green_tile.png?dl=0');
    game.load.image('redTile', 'https://dl.dropboxusercontent.com/s/zhk68fq5z0c70db/red_tile.png?dl=0');
    game.load.image('heroTile', 'https://dl.dropboxusercontent.com/s/8b5zkz9nhhx3a2i/hero_tile.png?dl=0');
    game.load.image('heroShadow', 'https://dl.dropboxusercontent.com/s/sq6deec9ddm2635/ball_shadow.png?dl=0');
    game.load.image('floor', '../../imagenes/calleV.png');
    game.load.image('floorH', '../../imagenes/calleH.png');
    game.load.image('floorC', '../../imagenes/calleH.png');
    game.load.image('pasto', '../../imagenes/pasto.png');
    game.load.image('arbol', '../../imagenes/arbol.png');
    game.load.image('tienda1', '../../imagenes/tienda.png');
    game.load.image('tienda1V', '../../imagenes/tiendaV.png');
    game.load.image('casa2R', '../../imagenes/casaR.png');
    game.load.image('tienda2V', '../../imagenes/cancha.png');
    game.load.image('casa1', '../../imagenes/casa1.png');
    game.load.image('casa1V', '../../imagenes/casa1V.png');
    game.load.image('casa2', '../../imagenes/casa2.png');
    game.load.image('casa2V', '../../imagenes/casa2V.png');
    game.load.image('casa3', '../../imagenes/casa3.png');
    game.load.image('casa3V', '../../imagenes/casa3V.png');
    game.load.image('sede1', '../../imagenes/muisca.png');
    game.load.image('sede2', '../../imagenes/uwa.png');
    game.load.image('sede3', '../../imagenes/sinu.png');
    game.load.image('sede4', '../../imagenes/wayuu.png');
    game.load.image('sede5', '../../imagenes/tairona.png');
    game.load.image('trans', '../../imagenes/transpa.png');
  
    
    game.load.atlasJSONArray('hero', 'https://dl.dropboxusercontent.com/s/hradzhl7mok1q25/hero_8_4_41_62.png?dl=0', 'https://dl.dropboxusercontent.com/s/95vb0e8zscc4k54/hero_8_4_41_62.json?dl=0');
}

function create() {
    bmpText = game.add.bitmapText(10, 10, 'font', 'PANASOFT', 24);
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    game.stage.backgroundColor = '#cccccc';
    //dibujamos la escena ordenada en profundidad en esta textura de renderizado

    gameScene=game.add.renderTexture(game.width,game.height);
    game.add.sprite(0, 0, gameScene);
    floorVSprite= game.make.sprite(0, 0, 'floor');
    floorHSprite= game.make.sprite(0, 0, 'floorH');
    pastoSprite= game.make.sprite(0, 0, 'pasto');
    arbolSprite= game.make.sprite(0, 0, 'arbol');
    tienda1Sprite= game.make.sprite(0, 0, 'tienda1');
    tienda1VSprite= game.make.sprite(0, 0, 'tienda1V');      
    casa2RSprite= game.make.sprite(0, 0, 'casa2R');
    tienda2VSprite= game.make.sprite(0, 0, 'tienda2V');
    casa1Sprite= game.make.sprite(0, 0, 'casa1');
    casa1VSprite= game.make.sprite(0, 0, 'casa1V');
    casa2Sprite= game.make.sprite(0, 0, 'casa2');
    casa2VSprite= game.make.sprite(0, 0, 'casa2V');
    casa3Sprite= game.make.sprite(0, 0, 'casa3');
    casa3VSprite= game.make.sprite(0, 0, 'casa3V');
    sede1Sprite= game.make.sprite(0, 0, 'sede1');
    sede2Sprite= game.make.sprite(0, 0, 'sede2');
    sede3Sprite= game.make.sprite(0, 0, 'sede3');
    sede4Sprite= game.make.sprite(0, 0, 'sede4');
    sede5Sprite= game.make.sprite(0, 0, 'sede5');
    transSprite= game.make.sprite(0, 0, 'trans');
    sorcererShadow=game.make.sprite(0,0,'heroShadow');
    sorcererShadow.scale= new Phaser.Point(0.5,0.6);
    sorcererShadow.alpha=0.4;
    createLevel();
    normText=game.add.text(10,360,"tap to change visible area "+visibleTiles.y +' x '+visibleTiles.x);
    
    game.input.activePointer.leftButton.onUp.add(changeVisibleTiles)
}
function changeVisibleTiles(){
    visibleTiles.x=Math.min(visibleTiles.x+1,levelData[0].length);
    visibleTiles.y=Math.min(visibleTiles.y+1,levelData.length);
    normText.text='visible : '+visibleTiles.y +' x '+visibleTiles.x;
}


function update(){
    //dectector del teclado
    detectKeyInput();
    //si no se presiona ninguna tecla, deténgase o reproduzca la animación para caminar
    if (dY == 0 && dX == 0)
    {
        sorcerer.animations.stop();
        sorcerer.animations.currentAnim.frame=0;
    }else{
        if(sorcerer.animations.currentAnim!=facing){
            sorcerer.animations.play(facing);
        }
    }

   
    //Comprueba si estamos entrando en una pared; de lo contrario, mueve al héroe en 2D.
    if (isWalkable())
    {
        heroMapPos.x +=  heroSpeed * dX;
        heroMapPos.y +=  heroSpeed * dY;
        
        //mover la esquina en dirección opuesta
        cornerMapPos.x -=  heroSpeed * dX;
        cornerMapPos.y -=  heroSpeed * dY;
        cornerMapTile=getTileCoordinates(cornerMapPos,tileWidth);
        //obtiene el nuevo mosaico de mapa del personaje
        heroMapTile=getTileCoordinates(heroMapPos,tileWidth);
        //deepsort y dibujar nueva escena
        renderScene();
    }
}






function createLevel(){//crear minimapa
    addHero();
    heroMapPos=new Phaser.Point(heroMapTile.y * tileWidth, heroMapTile.x * tileWidth);
    heroMapPos.x+=(tileWidth/2);
    heroMapPos.y+=(tileWidth/2);
    heroMapTile=getTileCoordinates(heroMapPos,tileWidth);
    renderScene();//dibujar una vez el estado inicial
}
function addHero(){
    // sprite
    sorcerer = game.add.sprite(-50, 0, 'hero', '1.png');// manténgalo fuera del área de la pantalla lateral
   
    // animacion
    sorcerer.animations.add('southeast', ['1.png','2.png','3.png','4.png'], 6, true);
    sorcerer.animations.add('south', ['5.png','6.png','7.png','8.png'], 6, true);
    sorcerer.animations.add('southwest', ['9.png','10.png','11.png','12.png'], 6, true);
    sorcerer.animations.add('west', ['13.png','14.png','15.png','16.png'], 6, true);
    sorcerer.animations.add('northwest', ['17.png','18.png','19.png','20.png'], 6, true);
    sorcerer.animations.add('north', ['21.png','22.png','23.png','24.png'], 6, true);
    sorcerer.animations.add('northeast', ['25.png','26.png','27.png','28.png'], 6, true);
    sorcerer.animations.add('east', ['29.png','30.png','31.png','32.png'], 6, true);
}





function renderScene(){
    gameScene.clear();//borre el cuadro anterior y luego vuelva a dibujar
    var tileType=0;
    //limitemos los bucles dentro del área visible
    var startTileX=Math.max(0,0-cornerMapTile.x);
    var startTileY=Math.max(0,0-cornerMapTile.y);
    var endTileX=Math.min(levelData[0].length,startTileX+visibleTiles.x);
    var endTileY=Math.min(levelData.length,startTileY+visibleTiles.y);
    startTileX=Math.max(0,endTileX-visibleTiles.x);
    startTileY=Math.max(0,endTileY-visibleTiles.y);
    //comprobar la condición del borde
    for (var i = startTileY; i < endTileY; i++)
    {
        for (var j = startTileX; j < endTileX; j++)
        {
            tileType=levelData[i][j];
            drawTileIso(tileType,i,j);
            if(i==heroMapTile.y&&j==heroMapTile.x){
                drawHeroIso();
            }
        }
    }
}



function drawHeroIso(){
    var isoPt= new Phaser.Point();//No es recomendable crear puntos en el ciclo de actualización
    var heroCornerPt=new Phaser.Point(heroMapPos.x-hero2DVolume.x/2+cornerMapPos.x,heroMapPos.y-hero2DVolume.y/2+cornerMapPos.y);
    isoPt=cartesianToIsometric(heroCornerPt);//encuentra una nueva posición isométrica para el héroe desde la posición del mapa 2D
    gameScene.renderXY(sorcererShadow,isoPt.x+borderOffset.x+shadowOffset.x, isoPt.y+borderOffset.y+shadowOffset.y, false);//dibujar sombra para renderizar textura
    gameScene.renderXY(sorcerer,isoPt.x+borderOffset.x+heroWidth, isoPt.y+borderOffset.y-heroHeight, false);
}//dibujar personaje para renderizar textura


function drawTileIso(tileType,i,j){//colocar baldosas de nivel isométrico
    var isoPt= new Phaser.Point();// No es recomendable crear un punto en el ciclo de actualización
    var cartPt=new Phaser.Point();//Esto está aquí para una mejor legibilidad del código.
    cartPt.x=j*tileWidth+cornerMapPos.x;
    cartPt.y=i*tileWidth+cornerMapPos.y;
    isoPt=cartesianToIsometric(cartPt);
    //Podríamos optimizar aún más al no dibujar si el mosaico está fuera de la pantalla
    if(tileType==1){
        gameScene.renderXY(tienda1Sprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);
    }else if(tileType==2){
        gameScene.renderXY(tienda1VSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if(tileType==3){
        gameScene.renderXY(casa1Sprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);
    }else if(tileType==4){
        gameScene.renderXY(casa1VSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);
    }else if (tileType==5){
        gameScene.renderXY(casa2Sprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);
    }else if(tileType==6){
        gameScene.renderXY(casa2VSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);
    }else if(tileType==7){
        gameScene.renderXY(casa3Sprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);
    }else if(tileType==8){
        gameScene.renderXY(casa3VSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);
    }else if (tileType==9){
        gameScene.renderXY(floorHSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y, false);
    }else if(tileType==10){
        gameScene.renderXY(sede1Sprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if(tileType==11){
        gameScene.renderXY(sede2Sprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if(tileType==12){
        gameScene.renderXY(sede3Sprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if(tileType==13){
        gameScene.renderXY(sede4Sprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if(tileType=='x'){
        gameScene.renderXY(transSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if(tileType==14){
        gameScene.renderXY(casa2RSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if(tileType==15){
        gameScene.renderXY(tienda2VSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if(tileType=='a'){
        gameScene.renderXY(arbolSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if(tileType==16){
        gameScene.renderXY(sede5Sprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y-wallHeight, false);   
    }else if (tileType=='p'){
        gameScene.renderXY(pastoSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y, false);
    } else{
        gameScene.renderXY(floorVSprite, isoPt.x+borderOffset.x, isoPt.y+borderOffset.y, false);
    }
}
function isWalkable(){//No es recomendable crear puntos en el ciclo de actualización, sino para facilitar la lectura del código
    var able=true;
    var heroCornerPt=new Phaser.Point(heroMapPos.x-hero2DVolume.x/2,heroMapPos.y-hero2DVolume.y/2);
    var cornerTL =new Phaser.Point();
    cornerTL.x=heroCornerPt.x +  (heroSpeed * dX);
    cornerTL.y=heroCornerPt.y +  (heroSpeed * dY);
    // ahora tenemos el punto de la esquina superior izquierda. Necesitamos encontrar las 4 esquinas según el ancho y alto de los gráficos del marcador del mapa.
    //idealmente deberíamos proporcionarle al héroe un volumen en lugar de usar el ancho y alto de los gráficos
    var cornerTR =new Phaser.Point();
    cornerTR.x=cornerTL.x+hero2DVolume.x;
    cornerTR.y=cornerTL.y;
    var cornerBR =new Phaser.Point();
    cornerBR.x=cornerTR.x;
    cornerBR.y=cornerTL.y+hero2DVolume.y;
    var cornerBL =new Phaser.Point();
    cornerBL.x=cornerTL.x;
    cornerBL.y=cornerBR.y;
    var newTileCorner1;
    var newTileCorner2;
    var newTileCorner3=heroMapPos;
    //Consigamos qué 2 esquinas comprobar según el revestimiento actual, pueden ser 3
    switch (facing){
        case "north":
            newTileCorner1=cornerTL;
            newTileCorner2=cornerTR;
        break;
        case "south":
            newTileCorner1=cornerBL;
            newTileCorner2=cornerBR;
        break;
        case "east":
            newTileCorner1=cornerBR;
            newTileCorner2=cornerTR;
        break;
        case "west":
            newTileCorner1=cornerTL;
            newTileCorner2=cornerBL;
        break;
        case "northeast":
            newTileCorner1=cornerTR;
            newTileCorner2=cornerBR;
            newTileCorner3=cornerTL;
        break;
        case "southeast":
            newTileCorner1=cornerTR;
            newTileCorner2=cornerBR;
            newTileCorner3=cornerBL;
        break;
        case "northwest":
            newTileCorner1=cornerTR;
            newTileCorner2=cornerBL;
            newTileCorner3=cornerTL;
        break;
        case "southwest":
            newTileCorner1=cornerTL;
            newTileCorner2=cornerBR;
            newTileCorner3=cornerBL;
        break;
    }
    //compruebe si esas esquinas caen dentro de una pared después de moverse
    newTileCorner1=getTileCoordinates(newTileCorner1,tileWidth);
    if(levelData[newTileCorner1.y][newTileCorner1.x]==1
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==2
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==3
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==4
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==5
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==6
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==7
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==8
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==10
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==11
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==12
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==13
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==14
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==15
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]==16
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]=='a'
    ||
    levelData[newTileCorner1.y][newTileCorner1.x]=='X'){
        able=false;
    }
    newTileCorner2=getTileCoordinates(newTileCorner2,tileWidth);
    if(levelData[newTileCorner2.y][newTileCorner2.x]==1
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==2
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==3
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==4
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==5
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==6
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==7
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==8
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==10
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==11
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==12
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==13
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==14
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==15
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]==16
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]=='a'
    ||
    levelData[newTileCorner2.y][newTileCorner2.x]=='x'){
        able=false;
    }
    newTileCorner3=getTileCoordinates(newTileCorner3,tileWidth);
    if(levelData[newTileCorner3.y][newTileCorner3.x]==1
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==2
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==3
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==4
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==5
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==6
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==7
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==8
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==10
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==11
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==12
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==13
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==14
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==15
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]==16
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]=='a'
    ||
    levelData[newTileCorner3.y][newTileCorner3.x]=='x'){
        able=false;
    }
    return able;
}
function detectKeyInput(){//Asignar dirección para caracteres y establecer componentes de velocidad x, y
    if (upKey.isDown)
    {
        dY = -1;
    }
    else if (downKey.isDown)
    {
        dY = 1;
    }
    else
    {
        dY = 0;
    }
    if (rightKey.isDown)
    {
        dX = 1;
        if (dY == 0)
        {
            facing = "east";
        }
        else if (dY==1)
        {
            facing = "southeast";
            dX = dY=halfSpeed;
        }
        else
        {
            facing = "northeast";
            dX=halfSpeed;
            dY=-1*halfSpeed;
        }
    }
    else if (leftKey.isDown)
    {
        dX = -1;
        if (dY == 0)
        {
            facing = "west";
        }
        else if (dY==1)
        {
            facing = "southwest";
            dY=halfSpeed;
            dX=-1*halfSpeed;
        }
        else
        {
            facing = "northwest";
            dX = dY=-1*halfSpeed;
        }
    }
    else
    {
        dX = 0;
        if (dY == 0)
        {
            //facing="west";
        }
        else if (dY==1)
        {
            facing = "south";
        }
        else
        {
            facing = "north";
        }
    }
}

function cartesianToIsometric(cartPt){
    var tempPt=new Phaser.Point();
    tempPt.x=cartPt.x-cartPt.y;
    tempPt.y=(cartPt.x+cartPt.y)/2;
    return (tempPt);
}
function isometricToCartesian(isoPt){
    var tempPt=new Phaser.Point();
    tempPt.x=(2*isoPt.y+isoPt.x)/2;
    tempPt.y=(2*isoPt.y-isoPt.x)/2;
    return (tempPt);
}
function getTileCoordinates(cartPt, tileHeight){
    var tempPt=new Phaser.Point();
    tempPt.x=Math.floor(cartPt.x/tileHeight);
    tempPt.y=Math.floor(cartPt.y/tileHeight);
    return(tempPt);
}
function getCartesianFromTileCoordinates(tilePt, tileHeight){
    var tempPt=new Phaser.Point();
    tempPt.x=tilePt.x*tileHeight;
    tempPt.y=tilePt.y*tileHeight;
    return(tempPt);
}



