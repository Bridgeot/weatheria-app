import '../../styles/Checklist.css';

function Checklist() {
    return (
        <section className='checklist-section'>
            <div className='checklist-container'>
                <div className='checklist-align'>
                    <h1 className='checklist-title'>Seasonal Checklist</h1>
                    <h3 className='checklist-subtitle'>use this list to plan ahead of the weather</h3>
                    <form className='checklist-form'>
                        <div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Umbrella'/>
                                <label for='Umbrella'>Umbrella</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Boots'/>
                                <label for='Boots'>Boots</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Sunscreen'/>
                                <label for='Sunscreen'>Sunscreen</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Sunglasses'/>
                                <label for='Sunglasses'>Sunglasses</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Face Towel'/>
                                <label for='Face Towel'>Face Towel</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Jacket'/>
                                <label for='Jacket'>Jacket</label>
                            </div>
                        </div>
                        <div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Fully Charged Phone'/>
                                <label for='Fully Charged Phone'>Fully Charged Phone</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Waterproof Pouch'/>
                                <label for='Waterproof Pouch'>Waterproof Pouch</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Extra Clothes'/>
                                <label for='Extra Clothes'>Extra Clothes</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Vitamins'/>
                                <label for='Vitamins'>Vitamins</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Traffic Updates'/>
                                <label for='Traffic Updates'>Traffic Updates</label>
                            </div>
                            <div className='checklist-item'>
                                <input type='checkbox' id='Route Plan'/>
                                <label for='Route Plan'>Route Plan</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Checklist;