package ipca.example.firstnews.models

import ipca.example.firstnews.ui.string2date
import org.json.JSONObject
import java.util.*

class Article {

    var author      : String? = null
    var title       : String? = null
    var description : String? = null
    var url         : String? = null
    var urlToImage  : String? = null
    var publishedAt : Date? = null
    var content     : String? = null
    var source      : Source? = null

    constructor(data:String){
        val jsonObject = JSONObject(data)
        author = jsonObject.getString("author")
        title       = jsonObject.getString("title")
        description = jsonObject.getString("description")
        url         = jsonObject.getString("url")
        urlToImage  = jsonObject.getString("urlToImage")
        publishedAt = string2date(jsonObject.getString("publishedAt"))
        content     = jsonObject.getString("content")
        source      = Source(jsonObject.getJSONObject("source").toString())
    }
}