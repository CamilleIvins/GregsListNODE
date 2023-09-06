import { Schema } from "mongoose";



export const carSchema = new Schema(
    {
        make: { type: String, required: true, minlength: 3, maxlength: 15 },
        model: { type: String, required: true, minlength: 3, maxlength: 35 },
        year: { type: Number, required: true, min: 1989, max: new Date().getFullYear() },
        price: { type: Number, required: true, min: 1, max: 1000000 },
        imgURL: { type: String, required: true, maxlength: 1000, default: '' },
        color: { type: String, required: true, minlength: 7, maxlength: 7, default: '#ffffff' },
        description: { type: String, required: true, maxlength: 5000 },

        // types: NUMBER & STRING  are most common
        // STRING: minlength, maxlength, maxlength is the most important to cap, esp in descriptions
        // color is usually STRING, but also mind hexcodes are 7-digits #0F0F0F
        // NUMBER: min, max, can involve dates
        // Don't forget BOOLEAN

    }
)