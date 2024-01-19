const baseUrl = 'https://prod.tria.so';

export const saveWalletAnalytics = async(walletAddress:string,clientId:string,walletType:string) => {
    console.log("walletAddress", walletAddress, clientId, `${baseUrl}/api/v2/user/saveWalletAnalytics`);

    try {
        const response = await fetch(`${baseUrl}/api/v2/user/saveWalletAnalytics`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                walletAddress,
                fromClientId: clientId,
                walletType,
            }),
        });

        const data = await response.json();
        console.log("data", data);
    } catch (err) {
        console.log(err);
    }
};