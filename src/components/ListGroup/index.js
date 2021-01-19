import React from 'react'

function ListGroup() {
    return (
                <>
                    <ListGroup className="list-group-contact" horizontal>
                        <ListGroup.Item variant="secondary">heathernewlin1@gmail.com</ListGroup.Item>
                        <ListGroup.Item variant="secondary">615.477.7223</ListGroup.Item>
                        <ListGroup.Item action href="/github" variant="secondary"><i class="fab fa-github"></i> @heatherhern</ListGroup.Item>
                    </ListGroup>
                </>
            )
}

export default ListGroup


