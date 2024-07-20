INSERT INTO
    Address (
        addressId,
        latitude,
        longitude,
        houseNo,
        streetNo,
        block,
        city,
        district,
        state,
        country,
        pincode
    )
VALUES
    (
        'ADD_ID',
        28.613939,
        77.209023,
        '123',
        '45A',
        'B',
        'New Delhi',
        'New Delhi',
        'Delhi',
        'India',
        '110001'
    );

INSERT INTO
    Organization (
        orgId,
        name,
        mobile,
        email,
        website,
        size,
        passcode,
        addressId,
        logo,
        industry
    )
VALUES
    (
        'ORG_ID',
        'itsRIGHTtime CREATIVE',
        '9540514188',
        'itsrighttimee@gamil.com',
        'https://www.techsolutions.com',
        100,
        'ABC123',
        'ADD_ID',
        'logo.png',
        'Information Technology'
    );