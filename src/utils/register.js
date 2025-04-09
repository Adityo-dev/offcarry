// 'use server'


export const registration = async (data) => {
    console.log(data);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUT_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            password: data.password,
            roleId: 2,
        }),
    });
    const result = await response.json();
    console.log(result);
    if (result?.error) {
        throw new Error(result.error);
    }
    return result;
};
