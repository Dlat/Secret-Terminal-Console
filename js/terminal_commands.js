var e = "info@logicminds.net";
var App = {
    echo: function(text) {
        this.echo(text);

    },
    help: function() {
        this.echo("Available commands:");
        this.echo("\tabout       information about this page");
        this.echo("\tcontact     display contact infomation");
        this.echo("\twhoami      display my short brief");
        this.echo("\thelp        this help screen.");                        
        this.echo("");
        this.echo("some other basic Linux commands are available: startx echo clear")

    },
	
    whoami: function() {
        this.echo("Hello, my name is Romel Vera (aka Core), I'm dad of Victoria and Amanda and I'm from Ecuador");
        this.echo("I'm an IT Scientist. I really love Technology and computer stuff.");
        this.echo("My technical skills:");
        this.echo("\t- Have strong knowledge about Linux and Windows operating system and open source software.");
        this.echo("\t- Experienced with web application development, specialist with PHP/MySQL. Can develop desktop application with C#.");
        this.echo("\nI'm available to work as freelancer, so feel free to get in touch via [[bg;green;]contact] command");

    },
	
    contact: function() {
		this.echo("Website: <a href='https://www.logicminds.net'>LogicMinds</a>", {raw:true});
        this.echo("Email  : " + e); 
        this.echo("Twitter: @RomelSan"); 
    },
	
    about: function() {
        this.echo("[[guib;red;black]Secret Terminal Console Created by \"Romel Vera\"]", {raw:false});
    },
	
	romelsan: function(){
		this.echo("Go to my website: <a href='https://www.logicminds.net'>LogicMinds</a>", {raw:true});
        //window.open("https://www.logicminds.net");
    },
	
    id: function(){
        this.echo("uid=1000(core) gid=1000(core)"); 
    },
	
    startx: function() {
        this.error('xinit: unable to connect to X server: Resource temporarily unavailable\nxinit: server error');
    }
}
