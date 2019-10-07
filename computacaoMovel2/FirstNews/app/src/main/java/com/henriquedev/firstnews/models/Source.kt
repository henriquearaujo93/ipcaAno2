package com.henriquedev.firstnews.models

import org.json.JSONObject

class Source {
    var id      :String? = null
    var name    :String? = null

    set(value){
        name = value
    }

    constructor(data: String) {
        val jsonObject = JSONObject(data)
        id = jsonObject.getString("id")
        name = jsonObject.getString("name")
    }
}