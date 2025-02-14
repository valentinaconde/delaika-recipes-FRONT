import { pool } from '@/config/db';

export async function GET(request) {
    try {
        const [rows] = await pool.query('SELECT * FROM categories');
        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name } = body;
        const [result] = await pool.query('INSERT INTO categories (name) VALUES (?)', [name]);
        return new Response(JSON.stringify({ id: result.insertId, name }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export async function PUT(request) {
    try {
        console.log('request');
        const body = await request.json();
        const { id, name } = body;
        console.log(id, name, body);
        await pool.query('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
        return new Response(null, {
            status: 204
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export async function DELETE(request, { params }) {
    console.log('request', request);
    const { id } = params;

    try {
        const [result] = await pool.query('DELETE FROM categories WHERE id = ?', [id]);
        if (result.affectedRows > 0) {
            return new Response(null, { status: 204 });
        } else {
            return new Response(JSON.stringify({ error: 'Category not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}