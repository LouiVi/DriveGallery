address = "https://drive.google.com/file/d/1tuPlj7M22AMKvadP-DhY40YO3OsCdvoY/view?usp=drivesdk";//"https://drive.google.com/file/d/1NYJJ1RKrEixcUe4KYvbn8aI0096xApxp/view?usp=drivesdk";//https://drive.google.com/drive/mobile/folders/1QKfnzarwnoNPT-_ER0uwHLi5PUZsR_ZG?utm_source=en&pli=1&sort=13&direction=a";//https://lh3.googleusercontent.com/fife/AK0iWDwmfaM355WhUwnknKQerGAtkVssAEk1B2tBVh6rO6b6Tj-3KosPleCFE9JNWGlhNHz_hy_lrk-Lc0IqYZmKMkjjp-bRzRyaGELDUdoRtNQ4GYK086NssQU8wTAl6UbJRpGh2753tHYE7nVBERfCo8-7fg5qXpU1FlM4f593sw6fXj56I2JuueJn6b2J6ZunfdKOIC_Px16fdIy27_PaXcBJSTZeSaLl-35paXhNRrprW26zBU-pP6kt7ZQgZmyvAAiFWOCe_KF1KFRfYbEhopF4zmVWmhiqYkbRR-JpL6xFgLBj-DZlB9iFbnEPWR6eOm_Xv8MCXYn3NY-1aj1mSox7IAgmqoq6Yn_PaMmk68JTWENC1Dk9L1PD0To9aKcAsWo1qsdZhHmOi4Fr6CB_0XMyrwuus9em0_39FGAiScTwbCnSUOPtMLD0RokHGws4DGYQk6gAAMx4hDO5gMCwRteMHVasT3dnZ7p2atTTDGVztP240ae9S-GAX8EXtRp8GaDSIZ8f2bckfY06Ys_1Q-dR5XtCI4RfCid84gUWZSmc7rEodU2jmtWKvKq6xcKjOPcuj0sgZG97reGMz6DB2FMRe9-8VPD5RNWcBRaPoMFU_mf8H_ik31oGtIKpkW3eOEeLGfT7DNvHqgpPQVoiUiIvUtnnU0Gt6pVE2Kn8vEpYG-FBHPOEMvLt_Bq6iOlqfHyT8yZMx1lbUxKaaSBDMx8psUq5ayd7VzQJPjnRZy7BHNfdt3v3PT0TKdjCX2PsHEFN7V1IW7NHZfdQVxxylduRWfVru3ExknqOWesgCJchRTVnea1CEkg00PRM7vPJT3xaSMidOxDbztgs8H1RS85jAl1L_QUs2dar2kxaSL_5yf2pgsRvxwBh3VzlhWuX6dO4VbSXVj7nSBkWRuy3B-UKk-n3Z_D_ZPGTPH6JA4ph8329WluW73pVsnHNAqnYKNwDaJtIq6-WahbGztwl1s7mXh8RB3iJ-RdtyzueIcKJgC5wnFFOvAT6te-GzqFDxeqf2mIaRi9FIkVosfIlGGqv5PHzSOt7FjSJghm8bPBE4rfEJ86U0vaaCRyDVDLZYH74687_kW-aT4Hv1zbUwvjg22Op1FSBURg-Y8LFDX11gpOInw8_5BNEGF1ht9VOkC42hjAj7F6WCnWFM6HE_GljXK3MEBsDyAYOqWyC1TFD6PQ0vLZR7-3QGVqI6xRHp2Zs2CrQNoxe7-fwUBTZ4Hm1Sd4cw-q7n3Cv6rJ7w-j9p1OaOR972mkNpzbdUmb561AouJbTghQHgJ5DTMKOCe_amVaogqj9FQReEjqfhyy8M6ETIFixSGNwhU8o5yOKD5h7MFkALl6aCwQ-h9bhaM94Ha1knEAAH5Vh7JdwFIePM9_V5dZTR-71z5olc0huv6XqgouI-j93tCXfmeUB7lYIRMA_QISIhu2p4rMKJkrDt8oH7EpQWKLZ1idEA77ZFRPCYgSGk0-uuYBYp36snrEZcx9PPNFjy9DrzMBDXjGsEn9rMAE-UNzMFCm7-G5CB72gkzG0gPw=w525-h393-p-k-nu";
app.CreateGDriveFileDownloader = function() {
    var dld = app.CreateDownloader("Light")
    dld._d = dld.Download
    dld._oc = dld.SetOnComplete
    dld._od = dld.SetOnDownload
    dld.SetOnComplete = function()
    {
    app.ShowPopup( "complete" );
    this._oc();
    return dld;
    }
    dld.SetOnDownload = function(path)
    {
    alert(path);
    this._od(path);
    return dld;
    }
    
    dld.Download = function(fileLink, folder, name, headers) {
        if(!name) throw new Error("Filename is required")
        fileLink = "" + fileLink + "";
        var id = fileLink + "".split("/d/")[1] + "".split("/view")[0]
        var lnk = "https://drive.google.com/uc?export=download&id="+id
        this._d(lnk, folder, name, headers)
    }
    return dld
}

//Called when application is started.
function OnStart()
{
  
  GoogleDrive = app.CreateGDriveFileDownloader();
  gd = GoogleDrive.Download(address, "Img/", "pic.png", null);
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	//txt = app.CreateText( "Hello" )
	img = app.CreateImage( "Img/pic.png", 1, 1 );
	lay.AddChild(img)
	
	//Add layout to app.	
	app.AddLayout( lay )
}