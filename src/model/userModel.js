const supabase = require('../services/supabase');

// to select all users from the user table
module.exports.selectAll = async () => {
    const { data, error } = await supabase
        .from('user')
        .select('user_id, username, email, points');
    
    if (error) throw error;
    return data;
}

// to select a user by user_id from the user table
module.exports.selectById = async (user_id) => {
    const { data, error } = await supabase
        .from('user')
        .select('*')
        .eq('user_id', user_id)
        .single();
    
    if (error) throw error;
    return data;
}

// to check if an email is unique in the user table
module.exports.uniqueEmail = async (email) => {
    const { data, error } = await supabase
        .from('user')
        .select('*')
        .eq('email', email);
    
    if (error) throw error;
    return data;
}

// to check if a username is unique in the user table
module.exports.uniqueUsername = async (username) => {
    const { data, error } = await supabase
        .from('user')
        .select('*')
        .eq('username', username);
    
    if (error) throw error;
    return data;
}

// to insert a user into the user table
module.exports.insertSingle = async (username, email) => {
    const { data, error } = await supabase
        .from('user')
        .insert([{ username, email }]);
    
    if (error) throw error;
    return data;
}

// to update a user by user_id in the user table
module.exports.updateById = async (user_id, username, email) => {
    const { data, error } = await supabase
        .from('user')
        .update({ username, email })
        .eq('user_id', user_id);
    
    if (error) throw error;
    return data;
}

// to delete a user by user_id from the user table
module.exports.deleteById = async (user_id) => {
    const { data, error } = await supabase
        .from('user')
        .delete()
        .eq('user_id', user_id);
    
    if (error) throw error;
    return data;
}

// Check if username or email exists
module.exports.checkUsernameOrEmailExist = async (email, username) => {
    const { data, error } = await supabase
        .from('user')
        .select('*')
        .or(`email.eq.${email},username.eq.${username}`);
    
    if (error) throw error;
    return data;
}

// Register
module.exports.register = async (username, email, hashPassword) => {
    const { data, error } = await supabase
        .from('user')
        .insert([{ username, email, password: hashPassword }]);
    
    if (error) throw error;
    return data;
}

// Login
module.exports.login = async (username) => {
    const { data, error } = await supabase
        .from('user')
        .select('*')
        .eq('username', username)
        .single();
    
    if (error) throw error;
    return data;
}
