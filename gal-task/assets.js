class Asset {

    constructor() {

            this._id;
            this._property_type;
            this._beds;
            this._location;
            this._price;


        }
        /*        id validation     */

    set id(value) {

        if (value >= 1 && value !== '')
            this._id = value;
        else
            throw Error(`Id only contains a Number`);


    }
    get id() {
        return this._id;

    }


    /*        property_type validation     */


    set property_type(value) {
        if (value == 'house' || value == 'townhose' || value == 'multy-family' || value == 'land' || value == 'other')
            this._property_type = value;
        else
            throw new Error(`Property type need to be one of the following : house , townhose , multy-family , land or other`);


    }
    get property_type() {
        return this._property_type;

    }




    /*        beds validation     */

    set beds(value) {
        if (value >= 1 && value !== '')
            this._beds = value;
        else
            throw new Error(`min is 0 Beds`);


    }
    get beds() {
        return this._beds;

    }



    /*        location validation     */

    set location(value) {
        this._location = value;

    }
    get location() {
        this._location;
    }


    /*        price validation     */

    set price(value) {
        if (value >= 1 && value !== '')
            this._price = value;
        else
            throw new Error(`Enter a valid price min 1`);

    }
    get price() {
        this._price;
    }

}
module.exports = {
    "AssestsClassPointer": Asset
};