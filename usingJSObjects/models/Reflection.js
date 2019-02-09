import moment from "moment";
import uuid from "uuid";

class Reflection {

    /**
     * class constructor
     * @param {object} data
     */

    constructor(){
        this.reflections = [];
    }
    /**
     * @return {object} reflection object
     */

     create(data) {
         const newReflection = {
             id: uuid.v4(),
             succes: data.succes || "",
             lowPoint: data.lowPoint || "",
             takeAway: data.takeAway || "",
             createdDate: moment.now(),
             modifiedDate: moment.now()
         };
         this.reflections.push(newReflection);
         return newReflection
     }
     
     /**
      * 
      * @param {uuid} id
      * @returns {object} refelction object
      */
     findOne(id){
         return this.reflections.find(reflect => reflect.id === id);
     }
     /**
      * @returns {object} returns all reflections object
      */
    findAll(){
        return this.reflections;
    }
    /**
     * @param {uuid} id
     * @param {object} data
     */
    update(id, data){
        const refelction = this.findOne(id);
        const index = this.reflections.indexOf(refelction);

        this.reflections[index].succes = data['succes'] || refelction.succes;
        this.reflections[index].lowPoint = data['lowPoint'] || reflection.lowPoint;
        this.reflections[index].takeAway = data['takeAway'] || refelction.takeAway;
        this.reflections[index].modifiedDate = moment.now()

        return this.reflections[index];
    }

    /**
     * 
     * @params {uuid} id
     */
    delete (id){

        const reflection = this.findOne(id);
        const index = this.reflections.indexOf(reflection);

        this.reflections.splice(index, 1);

        return {};
    }
}

export default new Reflection();