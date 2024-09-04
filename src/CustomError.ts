/**
 * CustomError class from built-in Error class
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

// The CustomError class was created using the Error class.
// The Error class had the message property but not the status code property. CustomError class got status code property.
class CustomError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
        this.name = "CustomError"; // Özelleştirilmiş hata türü olarak adlandırmak için
    }
}

export default CustomError;
