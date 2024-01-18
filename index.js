const { Pool } = require('pg')
require('dotenv').config()

const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } = process.env

const config = {
	user: `${DB_USER}`,
	host: `${DB_HOST}`,
	password: `${DB_PASSWORD}`,
	database: `${DB_NAME}`,
}

const pool = new Pool(config)

const getBooks = async () => {
	try {
		const res = await pool.query('SELECT * FROM books')
		console.log(res.rows)
		pool.end()
	} catch (error) {
		console.log(error)
	}
}

const insertBook = async () => {
	try {
		const text = 'INSERT INTO books (title, author) VALUES ($1, $2)'
		const values = ['1984', 'George Orwell']
		const res = await pool.query(text, values)
		console.log(res)
		pool.end()
	} catch (error) {
		console.log(error)
	}
}

const editBook = async () => {
	try {
		const text = 'UPDATE books SET title = $1, author = $2 WHERE id = $3'
		const values = ['Homage to Catalonia', 'George Orwell', 4]
		const res = await pool.query(text, values)
		console.log(res)
		pool.end()
	} catch (error) {
		console.log(error)
	}
}

const deleteBook = async () => {
	try {
		const text = 'DELETE FROM books WHERE id = $1'
		const value = [4]
		const res = await pool.query(text, value)
		console.log(res)
		pool.end()
	} catch (error) {
		console.log(error)
	}
}

const getUsers = async () => {
	try {
		const res = await pool.query('SELECT * FROM users')
		console.log(res.rows)
		pool.end()
	} catch (error) {
		console.log(error)
	}
}

const insertUser = async () => {
	try {
		const text = 'INSERT INTO users (username, password) VALUES ($1, $2)'
		const values = ['John', 'john1234']
		const res = await pool.query(text, values)
		console.log(res)
		pool.end()
	} catch (error) {
		console.log(error)
	}
}

const editUser = async () => {
	try {
		const text = 'UPDATE users SET username = $1, password = $2 WHERE id = $3'
		const values = ['Bruce', 'bruce123', '4']
		const res = await pool.query(text, values)
		console.log(res)
		pool.end()
	} catch (error) {
		console.log(error)
	}
}

const deleteUser = async () => {
	try {
		const text = 'DELETE FROM users WHERE id = $1'
		const value = [4]
		const res = await pool.query(text, value)
		console.log(res)
		pool.end()
	} catch (error) {
		console.log(error)
	}
}

getBooks()
insertBook()
editBook()
deleteBook()
getUsers()
insertUser()
editUser()
deleteUser()
