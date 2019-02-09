import moment from "moment";
import uuid from "uuid";

class Reflection {

    /**
     * class constructor
     * @param {object} data
     */

    constructor(){
        this.Reflection = [];
    }
    /**
     * @return {object} reflection object
     */

     create() {
         const newReflection = {
             id: uuid.v4(),
             succes: data.succes || "",
             lowPoint: data.lowPoint || "",
             takeAway: data.takeAway || "",
             createdDate: moment.now(),
             modifiedDate: moment.now()
         };
         this.Reflection.push(newReflection);
         return newReflection
     }
     
     /**
      * 
      * @param {uuid} id
      * 
      */
}