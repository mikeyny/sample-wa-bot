const redis = require('redis');

class RedisClient {
  constructor() {
    if (!RedisClient.instance) {
      this.client = redis.createClient({url:"redis://localhost:6379"}); // you can change this address when deploying to differen environments
      this.client.connect();  // connect to redis
      this.client.on('connect', (err) => console.log('Redis Client Connected', err));
      this.client.on('error', (err) => {
        console.log(`Error ${err}`);
      });
      RedisClient.instance = this;
    }
    return RedisClient.instance;
  }

  getValue(key) {
    return this.client.get(key);
  }

  setValue(key, value) {
      return this.client.set(key, value);
  }

  clearValue(key) {
    return this.client.del(key);
  }
}

module.exports = RedisClient;
