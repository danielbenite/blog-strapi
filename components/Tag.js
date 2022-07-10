const Tag = ({ category }) => {

    return (
        <>
            <span style={{
                backgroundColor:
                    category === 'Filme' ? '#f21147' :
                        category === 'Tecnologia' ? '#4641ff' :
                            category === 'Ciência' ? '#00c087' :
                                category === 'Crítica' ? '#309E3A' :
                                    category === 'Game' ? '#FFB800' :
                                        category === 'Dicas' ? '#09F1E3' :
                                            category === 'Nintendo' ? '#FF0000' :
                                                category === 'Notebook' ? '#FF7A00' :
                                                    category === 'Review' ? '#0075FF' :
                                                        category === 'Entretenimento' ? '#AD00FF' :
                                                            category === 'Série' ? '#7AC500' :
                                                                category === 'Notebook' ? '#FF7A00' : '#FF0000'

            }}>{category}</span>
        </>
    )
}

export default Tag