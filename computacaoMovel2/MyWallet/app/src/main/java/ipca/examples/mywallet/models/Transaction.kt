package ipca.examples.mywallet.models

import org.json.JSONObject
import java.io.Serializable

enum class TransactionType(val value: String)
{
    TRANSFER("transfer"),
    PAYMENTS("payments"),
    WITHDRAW("withdraw"),
    DEPOSIT("deposit")
}

class Transaction : Serializable {
    var id: String? = null
    var dateTime: String? = null
    var amount: Double? = null
    var type: String? = null
    var description: String? = null

    constructor(id: String?, dateTime: String?, amount: Double?, type: String?, description: String?)
    {
        this.id = id
        this.dateTime = dateTime
        this.amount = amount
        this.type = type
        this.description = description
    }

    fun toJson () : JSONObject {
        val jsonObject = JSONObject()
        jsonObject.put("id"             , id         )
        jsonObject.put("date"           , dateTime   )
        jsonObject.put("amount"         , amount     )
        jsonObject.put("type"           , type       )
        jsonObject.put("description"    , description)
        return jsonObject
    }
}