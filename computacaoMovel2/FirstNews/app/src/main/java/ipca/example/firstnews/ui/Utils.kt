package ipca.example.firstnews.ui

import java.text.SimpleDateFormat
import java.util.*

fun string2date(strDate: String): Date {
    val date = Date()
    val format = SimpleDateFormat("yyy-MM-dd'T'HH:mm:ss'Z'")
    format.parse(strDate)?.let {
        return it
    }
    return date
}