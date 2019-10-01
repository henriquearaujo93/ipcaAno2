package ipca.example.firstnews

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import ipca.example.firstnews.models.Article
import org.jetbrains.anko.doAsync
import org.jetbrains.anko.uiThread
import org.json.JSONArray
import org.json.JSONObject
import java.lang.Boolean.TRUE
import java.net.URL
import java.nio.charset.Charset

class HomeViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        val url = URL("https://newsapi.org/v2/top-headlines?country=pt&apiKey=c85081a3cd684dd293052331e4e71c9d\n")
        doAsync {
            val urlData = url.readText(Charset.defaultCharset())
            Log.d("NewsArticle", urlData)
            uiThread {
                value = urlData
            }
        }
    }
    val text: LiveData<String> = _text

    var articles : MutableList<Article> = ArrayList()

    private val _articles = MutableLiveData<List<Article>>().apply{
        val url = URL("https://newsapi.org/v2/top-headlines?country=pt&apiKey=c85081a3cd684dd293052331e4e71c9d\n")
        doAsync {
            val urlData = url.readText(Charset.defaultCharset())
            val jsonObject = JSONObject(urlData)
            var isStatusOk = false
            isStatusOk = (jsonObject.getString("status").compareTo("ok")==0)
            if(isStatusOk) {
                val jsonArray = jsonObject.getJSONArray("articles")
                for (i in 0 until jsonArray.length()) {
                    var article = Article((jsonArray.get(i) as JSONObject).toString())
                    articles.add(article)
                }
                uiThread {
                    value = articles
                }
            }

        }
    }
}