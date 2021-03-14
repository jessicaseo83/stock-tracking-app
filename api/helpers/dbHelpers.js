module.export = function(db) {
  const getAllUsers = function() {
    const query= {
      text:"SELECT * From users",
    }
    return db.query(query)
    .then(result =>  result.rows)
  }
  
  const getUser = function(user_id) {
    const query = {
      text:"SELECT * FROM users WHERE id = $1",
      values:[user_id]
    }
    return db.query(query)
    .then(result => result.rows[0])
  }

  const getUserByEmail = function(email) {
    const query= {
      text:"SELECT * From users WHERE email = $1",
      values:[email.trim().toLowerCase()]
    }
    return db.query(query)
    .then(result => result.rows[0]? result.rows[0]:Promise.reject({status:404,message:"user does not exist"}))
    
  }


  const addBalance = function(user_id, balance) {
    const query = {
      text: `UPDATE users 
            SET balance = $2
            WHERE users.id = $1`,
            values: [user_id, balance]
    }
    return db.query(query)
    .then(res => res.rows[0])
  }

  const addPortfolio = function(user_id, stock_id) {
    const query = {
      text: `INSERT INTO user_stocks (user_id, stock_id
        VALUES($1, $2) RETURNING *`,
        values: [user_id, stock_id]
    }
    return db.query(query)
    .then(res => res.rows[0])
  }
  
  return {
    getAllUsers,
    getUser,
    getUserByEmail,
    addBalance,
    addPortfolio
  }
}