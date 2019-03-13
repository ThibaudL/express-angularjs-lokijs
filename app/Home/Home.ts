import './home.css';
const template = require('./home.html');

export default class Home{
    public static selector :string =  'home';
    public static component = {
        template,
        controller : Home
    };

    public static $inject:string[] = ['$http'];
    private test1: string;
    private test2: string;

    constructor(private $http) {
        console.log("constructor","test 1 ");
    }

    $onInit(){
        this.$http.get('/api/mon-service/test1').then((res) => this.test1 = res.data);
        this.$http.get('/api/mon-service/test2').then((res) => this.test2 = res.data);
    }

}