re.e('level')
.extend({
	
	back:
	[
	
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,0,0,0,0,0,0,0,8,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,8,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,6,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,8,8],
	[0,0,0,0,0,0,0,0,0,0,0,0,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0],
	[0,0,0,0,0,6,2,5,0,0,0,0,4,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,6,2,1,1,3,0,0,0,0,4,7,0,0,0,0,0,0,0,0,0,6,2,2,5,0,0,0,0,0,0,0,0,0],
	[0,0,0,4,1,1,1,3,0,0,0,0,7,3,0,0,0,0,0,0,0,0,0,4,1,1,3,0,0,0,0,0,0,0,0,0],
	[0,0,0,4,1,1,1,3,0,0,0,0,4,3,0,0,0,0,0,0,0,0,0,4,1,1,3,0,0,0,0,0,0,0,0,0],
	[0,0,0,4,1,1,1,3,0,0,0,0,4,3,0,0,0,0,0,0,0,0,0,4,1,1,3,0,0,0,0,0,0,0,0,0],
	],
	//automatically setup hit tiles
	autoHit:true,
	
	map:
	[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,c,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,7,0,8,7,0,8,0,0,0,0,0,0,0,0,c,8,0,0,0,0,0,0,i,0,0,0,0],
	[0,0,0,0,0,0,0,c,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,c,7,7,0,0,0,0,0,0,0,7,8,7,0,0],
	[0,0,0,0,0,0,0,7,7,8,0,c,0,0,0,0,0,0,0,0,7,8,7,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,7,8,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,c,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,c,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0],
	[0,0,0,0,6,2,2,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,2,5,0,0,0,0,0,0,0,0,0,6],
	[2,2,2,2,1,1,1,3,s,0,0,0,0,6,2,2,5,0,0,0,6,5,s,6,2,1,1,3,0,0,8,0,0,0,0,0,0,4],
	[1,1,1,1,1,1,1,1,5,s,6,2,2,1,1,1,3,0,0,0,4,1,2,1,1,1,1,3,s,s,8,s,s,s,s,s,s,4]
	],
	
	spawn:[1, 3],
	
	hits:[],
	
	//powerups
	items:
	[
	['acid', {xt:17, yt:12, mul:2, ver:-1}],
	
	['acid', {xt:18, yt:12, mul:2, ver:-1}],
	
	['acid', {xt:19, yt:12, mul:2, ver:-1}],
	
	['ladder', {xt:15, yt:10, mul:5, ver:-1}],
	['ladder', {xt:20, yt:7, mul:4, ver:-1}],
	['ladder', {xt:30, yt:10, mul:4, ver:-1}],
	['ladder', {xt:37, yt:6, mul:5, ver:-1}]
	]

});