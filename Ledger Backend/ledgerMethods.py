import hashlib
import datetime as dt

# global invoice chain
invoice_chain = []

'''
Block structure: parent_hash, block_serial, timestamp, transaction
'''

# hash function
def hasher(block_content):
    '''
    hashes a transaction with sha256
    '''
    encoded_block_content = block_content.encode('utf-8')
    if type(t) is not str:
        t = json.dumps(t, sort_keys = True)
    return hashlib.sha256(encoded_block_content).hexdigest()

# making a block
def create_block(transaction_data):
    '''
    creates a new block with arg data into arg chain
    returns newly created block with unique hash
    '''

    global invoice_chain

    prev_block_hash = invoice_chain[-1]['hash']
    prev_block_serial = invoice_chain[-1]['block_serial']
    curr_block_serial = prev_block_serial + 1

    block_content = {
        'parent_hash': prev_block_hash,
        'block_serial': curr_block_serial,
        'timestamp': dt.datetime.now(),
        'transaction': transaction_data
    }

    return {
        'hash':hasher(block_content),
        'content':block_content
    }

# helper function to check hash integrity
def check_hash(block):
    '''
    checks the hash of a block with stored hash
    '''
    new_hash = hasher(block['content'])

    if block['hash'] != new_hash:
        print('block integrity compromised.')
        raise

    return

# adding the block to the global invoice chain
def add_block(invoice_data):
    '''
    adds invoice data into global invoice chain as a block
    WARN: passing invoice_chain as a param should be avoided as it can get really heavy in production
    '''
    global invoice_chain
    new_invoice_block = create_block(invoice_data)

    check_hash(new_invoice_block)

    invoice_chain.append(new_invoice_block)

# genesis block aka the first transaction
def create_genesis(invoice_data):
    '''
    wipes out the global invoice_chain, creates the genesis block and adds it to the global invoice_chain
    WARN: there shouldn't be any need to use this function more than once for one chain
    '''
    global invoice_chain
    genesis_data = {
        'parent_hash': None,
        'block_serial': 0,
        'timestamp': dt.datetime.now(),
        'transaction': invoice_data
    }

    genesis_block = {
        'hash': hasher(genesis_data),
        'content': genesis_data
    }

    invoice_chain = [genesis_block]
