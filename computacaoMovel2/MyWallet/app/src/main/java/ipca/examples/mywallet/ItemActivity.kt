package ipca.examples.mywallet

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import ipca.examples.mywallet.models.Transaction

import kotlinx.android.synthetic.main.activity_item.*

class ItemActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_item)

        val transaction = intent.getSerializableExtra("transaction") as Transaction

        textView_id.text = transaction.id
        textView_date.text = transaction.dateTime
        textView_amount.text = transaction.amount.toString()
        textView_type.text = transaction.type
        textView_description.text = transaction.description

    }
}
