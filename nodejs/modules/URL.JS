const codeitURL="https://www.codeit.com.np/popular-courses/mern?q=react&duration=1month";

const urlobject = new URL(codeitURL);

console.log(urlobject);
console.log(urlobject.host);
console.log(urlobject.pathname);
console.log(urlobject.searchParams);

