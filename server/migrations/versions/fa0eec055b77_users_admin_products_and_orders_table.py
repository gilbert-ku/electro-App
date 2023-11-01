"""users, admin, products and orders table

Revision ID: fa0eec055b77
Revises: 
Create Date: 2023-10-30 11:09:59.798515

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fa0eec055b77'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admin',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('contact', sa.String(), nullable=True),
    sa.Column('address', sa.String(length=120), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('_password_hash', sa.String(length=60), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('contact', sa.String(), nullable=True),
    sa.Column('address', sa.String(length=120), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('_password_hash', sa.String(length=60), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('products',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('category', sa.String(length=100), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('admin_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['admin_id'], ['admin.id'], name=op.f('fk_products_admin_id_admin')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('orders',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=200), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], name=op.f('fk_orders_product_id_products')),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name=op.f('fk_orders_user_id_user')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('orders')
    op.drop_table('products')
    op.drop_table('user')
    op.drop_table('admin')
    # ### end Alembic commands ###