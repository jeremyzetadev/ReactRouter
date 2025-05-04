Need to install:
npm i react-router-dom -S

Will show at start will be at path='/'

In this case:

        <Routes>
            <Route path='/' element={<Home/>} />                 <<<<<<<<========= Will have home component at start
            <Route path='/product' element={<Product/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>

![image](https://github.com/user-attachments/assets/815243b7-4a27-4bc7-bd2a-185e376b41f4)
