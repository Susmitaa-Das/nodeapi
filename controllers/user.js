export const getAllUsers =  async (req, res) => {
    const users = await User.find({})
  
    const keyword = req.query.keyword
    console.log(keyword)
  
    res.json({
      success: true,
      users,
    })
  }