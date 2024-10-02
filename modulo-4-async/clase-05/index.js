const url = new URL(
  "https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=iron&orderBy=title"
);
const searchParams = url.searchParams;

console.log(url);
console.log(searchParams);
console.log(searchParams.get("titleStartsWith"));

searchParams.set("collaborators", "Nere");
console.log(url.toString()); //toJSON()
//gateway.marvel.com/v1/public/comics?titleStartsWith=iron&orderBy=title&collaborators=Nere

console.log(url.href);

const myUrl = "http...";
const apiKey = "lafjshdfkasd";
const ts = "ts";
const hash = "ha";

const paramTitle = "titleStartsWith";
const paramAuthorization = `apikey={apiKey}&ts={ts}&hash={hash}`;

urlParametrizada = `${myUrl}?${paramAuthorization}&${paramTitle}`;
