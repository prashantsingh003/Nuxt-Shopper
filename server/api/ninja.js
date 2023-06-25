export default defineEventHandler(async (event)=>{
    // const { name }=getQuery(event);
    // const { age } = await readBody(event);
    // return{
    //     message:`hello ninjas ${name}! You are ${age} years old`
    // }
    const { data } = await fetch('https://api.currencyapi.com/v3/latest?apikey='+'eJdPhICJUBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2')

    return data
})