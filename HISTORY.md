<h2>v1.1.3 | 01/03/2017</h2>
<ul>
	<li>Meteor updated to  1.4.3</li>
	<li>Added a 404 Not Found route in <b>/imports/api/routes/config.js</b></li>
	<li>Fixed a naming error in <b>DDPLogging</b></li>
</ul>
<h2>v1.1.1 | 31/01/2017</h2>
<ul>
	<li>Moved the window size reactive dict to its own file under /imports/modules</li>
	<li>Added the global variable <b>DDPLogging</b> to toggle on and off the listening of ddp messages on client</li>
</ul>
<h2>v1.1.0 | 05/01/2016</h2>
<ul>
<li>Added some functions to <b>funcProg.js</b> file</li>
<li>
	<ul>
	<li>Set <b>DBTimeZone</b> and <b>DBTimeZoneOffset</b> in funcProg.js to set your database time zone and offset (when you need to normalize documents created on a daily basis for example</li>
	<li>Then use <b>getDBTs</b> to get the corresponding timestamp for your database and <b>getDBDate</b> to get the corresponding date for the database</li>
	<li>Those two functions are very useful to normalize your formated date in documents for all your users all over the world.</li>
</ul>
</li>
<li>
<ul>
	<li>Use <b>comp</b> and <b>pipe</b> to chain function calls (based on <b>reduce()</b> and function curring)</li>
	<li>Use <b>comp</b> to chain functions calls and save the chain for later use</li>
	<li>Example : `let compute = comp( multiplyBy3, add9 ); log( composed( 2 ) ); => 33`</li>
	<li>Use <b>pipe</b> to chain functions calls for an immediate execution</li>
	<li>Example : `pipe( [multiplyBy3, add9], 2 ); // => 33`</li>
	<li>Credits to <a href="https://github.com/FlorianBELLAZOUZ">FlorianBELLAZOUZ</a></li>
</ul>
</li>
<li>
<ul>
	<li><b>reduce</b> : an alias for <b>array.reduce</b> using function curring </li>
	<li>Example: `reduce( val=>(val*2) )([1,2,3,4])(0); // iteratee, array, optional initial value for the accumulator`</li>
</ul>
</li>
</ul>

<h2>v1.0.1 | 20/12/2016</h2>
<ul>
<li>Added the <b>DOMManipulation.js</b> file</li>
<li>Added the <b>parse</b>, <b>stringify</b> and <b>forIn</b> functions to funcProg.js</li>
<li>Added the pre-installed <b>ejson</b> package</li>
<li>Patched a missing import of appContext in the client's startup</li>
</ul>

<h2>v1.0 | 18/12/2016</h2>
<ul>
<li>First version. Simply extracted from the talkalang project as it was then</li>
</ul>