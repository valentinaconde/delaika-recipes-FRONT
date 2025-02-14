import { pool } from '@/config/db';


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