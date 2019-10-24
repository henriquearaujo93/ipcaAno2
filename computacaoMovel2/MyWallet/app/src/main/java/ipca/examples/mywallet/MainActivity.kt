package ipca.examples.mywallet

import android.content.Intent
import android.os.Bundle
import android.view.*
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity
import android.widget.BaseAdapter
import android.widget.TextView
import ipca.examples.mywallet.models.Transaction
import ipca.examples.mywallet.models.TransactionType
import kotlinx.android.synthetic.main.activity_item.*

import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.content_main.*

class MainActivity : AppCompatActivity() {

    val transactions : MutableList<Transaction> = ArrayList()
    var transactionAdapter : BaseAdapter? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(toolbar)

        fab.setOnClickListener { view ->
            Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                .setAction("Action", null).show()
        }

        transactions.add(Transaction("1", "2019-10-01", 100.0, TransactionType.DEPOSIT.value, "Deposito inicial"))
        transactions.add(Transaction("2", "2019-10-02", 100.0, TransactionType.WITHDRAW.value, "Levantamento inicial"))
        transactions.add(Transaction("3", "2019-10-03", 100.0, TransactionType.PAYMENTS.value, "Pagamento inicial"))

        transactionAdapter = TransactionsAdapter()
        listViewTransactions.adapter = transactionAdapter

        fun currentAmount() : Double {
            var amount : Double = 0.0
            for (transaction in transactions){
                when (transaction.type) {
                    TransactionType.DEPOSIT.value -> {
                        transaction.amount?.let {Double
                        amount += it
                        }
                    }
                }
            }
            return amount
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        return when (item.itemId) {
            R.id.action_settings -> true
            else -> super.onOptionsItemSelected(item)
        }
    }

    inner class TransactionsAdapter : BaseAdapter() {
        override fun getView(position: Int, view: View?, parent: ViewGroup?): View {
            val view = layoutInflater.inflate(R.layout.row_transaction, parent, false)
            val textViewDescription = view.findViewById<TextView>(R.id.textView)
            val textViewDate = view.findViewById<TextView>(R.id.textView2)
            val textViewAmount = view.findViewById<TextView>(R.id.textView3)

            val transaction = transactions[position]

            view.setOnClickListener{

                    val  i = Intent(this@MainActivity, ItemActivity::class.java)
                    i.putExtra("transaction", transaction)
                    startActivity(i)
            }

            textViewDescription.text = transaction.description
            textViewDate.text = transaction.dateTime
            textViewAmount.text = transaction.amount.toString()

            return view
        }

        override fun getItem(position: Int): Any {
            return transactions[position]
        }

        override fun getItemId(position: Int): Long {
            return 0
        }

        override fun getCount(): Int {
            return transactions.size
        }
    }
}
